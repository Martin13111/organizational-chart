import {
  mysqlTable,
  int,
  varchar,
  date,
  decimal,
} from "drizzle-orm/mysql-core";

export const people = mysqlTable("people", {
  id: int("id").primaryKey().autoincrement(), 
  firstName: varchar("firstName", { length: 100 }).notNull(),
  lastName: varchar("lastName", { length: 100 }).notNull(),
  age: int("age").notNull(),
  gender: varchar("gender", ["Male", "Female", "Other"]).notNull(),
});

export const positions = mysqlTable("positions", {
  id: int("id").primaryKey().autoincrement(), 
  positionName: varchar("positionName", { length: 100 }).unique().notNull(),
});

export const departments = mysqlTable("departments", {
  id: int("id").primaryKey().autoincrement(),
  departmentName: varchar("departmentName", { length: 100 }).unique().notNull(),
  parentDepartmentId: int("parentDepartmentId").references(() => people.id),
});

export const employees = mysqlTable("employees", {
  id: int("id").primaryKey().autoincrement(),
  personId: int("personId")
    .notNull()
    .references(() => people.id),
  departmentId: int("departmentId")
    .notNull()
    .references(() => departments.id),
  positionId: int("positionId")
    .notNull()
    .references(() => positions.id),
  startDate: date("startDate").notNull(),
  endDate: date("endDate"),
  salary: decimal("salary", { precision: 10, scale: 2 }),
  vacationDays: int("vacationDays"),
});

export const departmentHeads = mysqlTable("departmentHeads", {
  id: int("id").primaryKey().autoincrement(),
  departmentId: int("departmentId")
    .notNull()
    .references(() => departments.id),
  headId: int("headId")
    .notNull()
    .references(() => employees.id),
});