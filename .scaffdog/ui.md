---
name: "ui"
root: "src"
output: "."
questions:
  choice:
    message: "Choose feature or domain: "
    choices:
      - "feature"
      - "domain"
  feature:
    if: contains(inputs.choice, "feature")
    message: "Please enter feature. <命名規則> <action>から始めてください (例) ViewProfile: "
  domain:
    if: contains(inputs.choice, "domain")
    message: "Please enter domain. <命名規則> <domain>-<ui>の形式で作成してください (例) AvatarCircle: "
  ui: "Please enter ui name: "
---

# `{{ inputs.choice }}/{{ if len(inputs.feature) > 0 }}{{ inputs.feature | kebab }}{{ else }}{{ inputs.domain | kebab }}{{ end }}/ui/{{ inputs.ui | pascal }}/{{ inputs.ui | pascal }}.tsx`

```tsx
import type { FC } from "react";

type Props = {};

export const {{ inputs.ui | pascal }}: FC<Props> = () => {
  return <></>
};

```

# `{{ inputs.choice }}/{{ if len(inputs.feature) > 0 }}{{ inputs.feature | kebab }}{{ else }}{{ inputs.domain | kebab }}{{ end }}/ui/{{ inputs.ui | pascal }}/{{ inputs.ui | pascal }}.stories.tsx`

```ts
import { {{ inputs.ui | pascal }} } from "./{{ inputs.ui | pascal }}";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "{{ inputs.choice }}/{{ if len(inputs.feature) > 0 }}{{ inputs.feature | kebab }}{{ else }}{{ inputs.domain | kebab }}{{ end }}/{{ inputs.ui | pascal }}",
  component: {{ inputs.ui | pascal }},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof {{ inputs.ui | pascal }}>;
export default meta;

type Story = StoryObj<typeof {{ inputs.ui | pascal }}>;

export const Default: Story = {};

```

# `{{ inputs.choice }}/{{ if len(inputs.feature) > 0 }}{{ inputs.feature | kebab }}{{ else }}{{ inputs.domain | kebab }}{{ end }}/ui/{{ inputs.ui | pascal }}/index.ts`

```ts
export { {{ inputs.ui | pascal }} } from "./{{ inputs.ui | pascal }}";

```

# `{{ inputs.choice }}/{{ if len(inputs.feature) > 0 }}{{ inputs.feature | kebab }}{{ else }}{{ inputs.domain | kebab }}{{ end }}/ui/index.ts`

```ts
{{ read output.abs }}export { {{ inputs.ui | pascal }} } from "./{{ inputs.ui | pascal }}";
```
