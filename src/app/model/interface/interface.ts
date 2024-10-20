export interface IRole {
  roleId: number;
  role: string;
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface IDesignation {
  designationId: number;
  designation: string;
}

export interface IEmployee {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  role: string;
}

export interface IClientProjct {
  empName: string,
  empId: number,
  empCode: string,
  empEmailId: string,
  empDesignation: string,
  projectName: string,
  startDate: string,
  expectedEndDate: string,
  clientName: string,
  clientProjectId: number,
}
