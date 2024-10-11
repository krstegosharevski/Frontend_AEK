export interface OperatorAssignedSeries {
    Operator_entityid: number;
    assignedSeries_entityid: number;
  }
  
  export interface Operator {
    code: string;
    name: string;
    operator_assignedseries: OperatorAssignedSeries[];
  }
  
  export interface ApiResponse {
    tip: string;
    assignedSeriesEnd: string;
    assignedSeriesStart: string;
    lastChange: string;
    nationalDestinationCode: string;
    type: string;
    routingCode_entityid: number;
    dateOfAssignment: string;
    operator: Operator[];
  }