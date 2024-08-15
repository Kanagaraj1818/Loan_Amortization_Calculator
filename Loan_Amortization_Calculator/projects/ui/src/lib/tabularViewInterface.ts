export interface AmortizationScheduleEntry {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}
export interface ContentState {
    content?: Schedule;
    loading?: boolean;
    loaded?: boolean;
    error?: Error;
  }

export interface Schedule{
    schedule: AmortizationScheduleEntry[];
}