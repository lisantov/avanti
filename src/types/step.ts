export enum StepDefinedStatus {
  WAITING = 'IN_ATTESA',
  COMPLETE = 'COMPLETATO',
}

export const StepDefinedStatusText = new Map([
  [StepDefinedStatus.WAITING, 'In attesa'],
  [StepDefinedStatus.COMPLETE, 'Completato'],
])

export interface IStep {
  id: string
  title: string
  status: StepDefinedStatus | string
  icon: string
}
