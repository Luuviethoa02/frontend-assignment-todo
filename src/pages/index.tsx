import * as Tabs from '@radix-ui/react-tabs';

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import { useState } from 'react';

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */
export type TabValue = 'all' | 'pending' | 'completed';

const tabOptions: { value: TabValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
];

const Index = () => {
  const [tabActive, setTabActive] = useState<TabValue>('all');

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">Todo App</h1>
        <div className="pt-10">
          <Tabs.Root defaultValue="all" orientation="vertical">
            <Tabs.List aria-label="tabs todo list">
              {tabOptions.map(({ value, label }) => (
                <Tabs.Trigger
                  key={value}
                  onClick={() => setTabActive(value)}
                  className={`border border-solid font-bold text-sm leading-5 text-center mr-2 border-[#E2E8F0] rounded-[30px] px-6 py-3 capitalize ${tabActive === value ? 'text-white bg-[#334155]' : 'text-[#334155] bg-none'
                    }`}
                  value={value}
                >
                  {label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {tabOptions.map(({ value }) => (
              <Tabs.Content key={value} value={value}>
                <TodoList tab={value} />
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>

  )
}

export default Index
