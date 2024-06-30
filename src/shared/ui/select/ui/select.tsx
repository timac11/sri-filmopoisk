import styles from './select.module.scss';
import {FC, useCallback, useMemo, useState} from "react";
import {ArrowDown} from "../../../assets/icons";

type SelectItem = {
  value: string;
  name: string;
}

type SelectProps = {
  title?: string;
  value: string;
  onChange?: (item: SelectItem) => void;
  placeholder?: string;
  options: SelectItem[];
}

export const Select: FC<SelectProps> = ({ title, onChange, options, value, placeholder }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const onItemCLick = useCallback((item: SelectItem) => {
    setIsOpened(false);
    onChange?.(item);
  }, [onChange]);

  const selectValue = useMemo(() => {
    if (value) {
      const item = options.find(item => item.value === value);
      if (item) {
        return item;
      }
    }

    return undefined;
  }, [options, value]);

  return <div className={styles.container}>
    <span className={styles.title}>{title}</span>
    <div className={styles.inputWrapper}>
      <input className={styles.input} value={selectValue?.name} placeholder={placeholder}/>
      <div onClick={() => setIsOpened((value) => !value)}>
        <ArrowDown />
      </div>
      {isOpened && <ul className={styles.list}>
        {options.map(item => <li
          className={styles.listItem}
          onClick={() => onItemCLick(item)}
          key={item.name}>
          {item.value}
        </li>)}
      </ul>}
    </div>
  </div>
}
