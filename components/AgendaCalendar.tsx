"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import type { EventClickArg } from "@fullcalendar/core";

interface Props {
  events: any[];
  onEventClick: (id: string, title: string) => void;
}

export default function AgendaCalendar({ events, onEventClick }: Props) {
  function handleEventClick(info: EventClickArg) {
    info.jsEvent.preventDefault();
    const id = info.event.extendedProps?.rawId ?? info.event.id;
    onEventClick(String(id), info.event.title);
  }

  return (
    <>
      <style>{`
        .fc { font-family: inherit; }
        .fc-toolbar-title { font-size: 1.25rem !important; font-weight: 900; color: #171717; }
        .fc-button-primary {
          background: #B7042C !important;
          border-color: #B7042C !important;
          border-radius: 9999px !important;
          font-weight: 700 !important;
          font-size: 0.8rem !important;
          padding: 6px 14px !important;
          text-transform: none !important;
          letter-spacing: 0 !important;
        }
        .fc-button-primary:hover { background: #9b0325 !important; border-color: #9b0325 !important; }
        .fc-button-primary:disabled { background: #e5e7eb !important; border-color: #e5e7eb !important; color: #9ca3af !important; }
        .fc-button-group .fc-button-primary { border-radius: 0 !important; }
        .fc-button-group .fc-button-primary:first-child { border-radius: 9999px 0 0 9999px !important; }
        .fc-button-group .fc-button-primary:last-child { border-radius: 0 9999px 9999px 0 !important; }
        .fc-button-active { background: #7f0020 !important; border-color: #7f0020 !important; }
        .fc-daygrid-day-number { font-weight: 600; color: #374151; font-size: 0.85rem; padding: 6px 8px !important; }
        .fc-col-header-cell-cushion { font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; }
        .fc-daygrid-day.fc-day-today { background: #fff5f7 !important; }
        .fc-daygrid-day.fc-day-today .fc-daygrid-day-number { color: #B7042C; font-weight: 900; }
        .fc-event {
          border-radius: 6px !important;
          border: none !important;
          background: #B7042C !important;
          color: white !important;
          font-size: 0.72rem !important;
          font-weight: 600 !important;
          padding: 2px 6px !important;
          cursor: pointer;
        }
        .fc-event:hover { background: #9b0325 !important; }
        .fc-list-event:hover td { background: #fff5f7 !important; }
        .fc-list-event-title a { color: #B7042C !important; font-weight: 600; text-decoration: none; }
        .fc-list-event-dot { border-color: #B7042C !important; }
        .fc-list-day-cushion { background: #f9fafb !important; color: #374151 !important; font-weight: 700; }
        .fc-scrollgrid { border-color: #f3f4f6 !important; }
        .fc-scrollgrid td, .fc-scrollgrid th { border-color: #f3f4f6 !important; }
        .fc-more-link { color: #B7042C !important; font-weight: 700; font-size: 0.75rem; }
        .fc-popover { border-color: #f3f4f6 !important; border-radius: 12px !important; box-shadow: 0 10px 40px rgba(0,0,0,0.12) !important; overflow: hidden; }
        .fc-popover-header { background: #B7042C !important; color: white !important; font-weight: 700; }
        .fc-popover-close { color: white !important; }
      `}</style>
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={ptBrLocale}
        events={events}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listMonth",
        }}
        buttonText={{ today: "Hoje", month: "Mês", list: "Lista" }}
        height="auto"
        eventMaxStack={3}
        dayMaxEventRows={3}
        fixedWeekCount={false}
        eventDisplay="block"
      />
    </>
  );
}
