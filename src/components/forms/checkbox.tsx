export function CheckBox({ checked, onChange, label, id }: { checked: boolean, onChange: (e: boolean) => void, label: string, id: string }) {
    return <div className="form-check">
        <input type="checkbox" className="form-check-input" checked={checked}
            id={id}
            onChange={(e: any) => onChange(e.target.checked)} />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}