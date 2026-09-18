import { ref } from 'vue'
import { defineStore } from 'pinia'
import { StepDefinedStatus, type IStep } from '@/types/step'

export const useStepsStore = defineStore('steps', () => {
  const steps = ref<IStep[]>([
    {
      id: '0',
      title: 'Simulazione completata',
      status: StepDefinedStatus.COMPLETE,
      icon: 'step',
    },
    {
      id: '1',
      title: 'Credito approvato',
      status: StepDefinedStatus.COMPLETE,
      icon: 'shield',
    },
    {
      id: '2',
      title: 'Account creato',
      status: StepDefinedStatus.COMPLETE,
      icon: 'user',
    },
    {
      id: '3',
      title: 'Account creato',
      status: 'Azione richiesta',
      icon: 'upload',
    },
    {
      id: '4',
      title: 'Contratto firmato',
      status: StepDefinedStatus.WAITING,
      icon: 'edit',
    },
  ])

  return { steps }
})
