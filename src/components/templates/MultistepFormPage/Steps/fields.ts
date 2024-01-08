import { SectionData, StepKey } from '@site/src/components/templates/MultistepFormPage/types';

export const fields: SectionData[] = [
  {
    id: StepKey.Step1,
    label: 'General Information',
    items: [
      {
        id: 'name',
        label: 'Name',
        required: true,
      },
      { id: 'email', label: 'Email', required: false },
      { id: 'message', label: 'Message', required: false },
    ],
  },
  {
    id: StepKey.Step2,
    label: 'Additional Information',
    items: [
      {
        id: 'radio',
        label: 'Radio group',
        required: false,
      },
      { id: 'text', label: 'Text input', required: false },
      { id: 'slider', label: 'Slider input', required: false },
    ],
  },
];
