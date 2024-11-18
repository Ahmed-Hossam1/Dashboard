import React from "react";

export interface IMain {
  name: string;
  favicon: React.ReactNode;
}
export interface IData {
  name: string;
  favicon: React.ReactNode;
}
export interface IPages {
  name: string;
  favicon: React.ReactNode;
}
export interface ICharts {
  name: string;
  favicon: React.ReactNode;
}

export interface IDashBoardRow1 {
  favicon: React.ReactNode;
  number: string;
  description: string;
  offer: string;
}

export interface IDataTeam {
  id: number | string;
  name: string;
  email: string;
  age: string | number;
  phone: string | number;
  access: string;
}

export interface IDataContact {
  id: string | number;
  name: string;
  email: string;
  age: number;
  phone: string | number;
  address: string;
  city: string;
  zipCode: string | number;
  registrarId: number;
}

export interface IDataInvoices {
  id: string | number;
  name: string;
  email: string;
  cost: string | number;
  phone: string;
  date: string;
}

export interface IFormData {
  name:
    | "firstName"
    | "lastName"
    | "email"
    | "contactNumber"
    | "Address1"
    | "Address2";
  placeholder: string;
  type: string;
  validation: {
    required: boolean;
    pattern?: RegExp;
  };
}

export interface IAccordingData {
  header: string;
  content: string;
}
