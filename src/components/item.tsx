import { Children, Column, Row } from "./styled";
import { TItem } from "./types"
import { v4 as uuid } from "uuid";

type TItemProps = {
  root?: boolean;
  item: TItem;
  onChange: (item: TItem) => void;
  onRemove?: () => void;
}

export const Item = ({ item, root, onChange, onRemove }: TItemProps) => {
  return (
    <Column>
      <Row>
        <input value={item.name} onChange={e => onChange({ ...item, name: e.target.value })} />

        {!root && (
          <button onClick={onRemove}>-</button>
        )}

        <button onClick={() => onChange({ ...item, children: [ ...(item.children ?? []), { name: "", id: uuid() } ] })}>+</button>
      </Row>

      {item.children && (
        <Children>
          {item.children.map(child => (
            <Item
              key={child.id}
              item={child}
              onChange={changed => onChange({ ...item, children: item.children?.map(i => i === child ? changed : i) })}
              onRemove={() => onChange({ ...item, children: item.children?.length === 1 ? undefined : item.children?.filter(i => i !== child) })} />
          ))}
        </Children>
      )}
    </Column>
  )
}