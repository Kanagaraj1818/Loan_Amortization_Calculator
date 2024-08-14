export interface AmortizationScheduleEntry {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}