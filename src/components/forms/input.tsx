export function Input({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: any }): JSX.Element {
    return <div>
        <input type="text" className="form-control" value={value} placeholder={placeholder}
            onChange={(e: React.SyntheticEvent<HTMLInputElement>) => onChange(e.target)} />
    </div>
}