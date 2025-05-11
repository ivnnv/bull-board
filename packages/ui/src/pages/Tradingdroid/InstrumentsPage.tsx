import React from 'react';
import { useQueues } from '../../hooks/useQueues';
import s from './InstrumentsPage.module.css';

export const InstrumentsPage = () => {
  const { queues } = useQueues();

  return (
    <section>
      <div className={s.header}>
        <span>exchanges: {queues?.map(e => e.name)}</span>
      </div>
    </section>
  );
};
