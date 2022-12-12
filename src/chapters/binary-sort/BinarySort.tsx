import { binarySort } from './binarySort.service'

export const BinarySort: React.FC = () => {
    const idx = binarySort(['Andrew', 'Ery', 'Liza', 'Sonya', 'Tatyana'], 'Tatyana')
    return <div>BinarySorting result: {idx}</div>
}
