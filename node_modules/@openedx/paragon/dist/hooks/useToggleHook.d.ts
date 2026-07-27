export type Toggler = [
    isOn: boolean,
    setOn: () => void,
    setOff: () => void,
    toggle: () => void
];
export interface ToggleHandlers {
    handleToggleOn?: () => void;
    handleToggleOff?: () => void;
    handleToggle?: (newStatus: boolean) => void;
}
export default function useToggle(defaultIsOn?: boolean, handlers?: ToggleHandlers): Toggler;
