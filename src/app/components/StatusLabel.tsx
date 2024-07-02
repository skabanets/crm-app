import React from 'react';

export enum Status {
  Active = 'Active',
  NotActive = 'NotActive',
  Pending = 'Pending',
  Suspended = 'Suspended',
}

interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

export const StatusLabel: React.FC<StatusLabelProps> = ({
  children,
  status,
}) => {
  const getStatusColor = (status: Status) => {
    switch (status) {
      case Status.Active:
        return 'text-green-700 bg-green-100';
      case Status.NotActive:
        return 'bg-red-100 text-red-700';
      case Status.Pending:
        return 'bg-orange-100 text-orange-700';
      case Status.Suspended:
        return 'bg-blue-100 text-blue-700';
      default:
        return '';
    }
  };

  return (
    <div
      className={`inline-flex items-center rounded-[28px] px-3.5 py-1 text-sm font-medium ${getStatusColor(status)}`}
    >
      <div className="mr-2 h-1 w-1 rounded-full bg-current" />
      {children}
    </div>
  );
};
