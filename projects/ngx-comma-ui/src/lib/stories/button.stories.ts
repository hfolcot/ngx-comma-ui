import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';

const meta: Meta<ButtonComponent> = {
    title: "CommaUI/Button",
    component: ButtonComponent,
    render: (args) => {
        return {
            props: args,
            template: `<cma-button [disabled]="disabled">Click Me</cma-button>`
        }
    }
}

export default meta;
type Story = StoryObj<ButtonComponent>;


export const Default: Story = {
    args: {
        btnType: "button",
        disabled: false,
        click: () => console.log("Button clicked"),
    }
}

export const Disabled: Story = {
    args: {
        btnType: "button",
        disabled: true,
        click: () => console.log("Button clicked"),
    }
}