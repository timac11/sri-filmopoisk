import { FC, useCallback, useMemo, useRef, useState } from 'react';

import { ArrowDown } from '../../../assets/icons';
import useClickOutside from '../../../hooks/useClickOutside.ts';

import styles from './select.module.scss';

type SelectItem = {
  value: string;
  name: string;
};

type SelectProps = {
  title?: string;
  value: string;
  onChange?: (item: SelectItem) => void;
  placeholder?: string;
  options: SelectItem[];
};

export const Select: FC<SelectProps> = ({ title, onChange, options, value, placeholder }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const onItemCLick = useCallback(
    (item: SelectItem) => {
      setIsOpened(false);
      onChange?.(item);
    },
    [onChange],
  );

  const ref = useRef();

  useClickOutside(ref, () => {
    setIsOpened(false);
  });

  const selectValue = useMemo(() => {
    if (value) {
      const item = options.find((item) => item.value === value);
      if (item) {
        return item;
      }
    }

    return undefined;
  }, [options, value]);

  return (
    <div className={styles.container} ref={ref}>
      <span className={styles.title}>{title}</span>
      <div className={styles.inputWrapper}>
        <input className={styles.input} value={selectValue?.name} placeholder={placeholder} />
        <div onClick={() => setIsOpened((value) => !value)}>
          <ArrowDown />
        </div>
        {isOpened && (
          <ul className={styles.list}>
            {options.map((item) => (
              <li className={styles.listItem} onClick={() => onItemCLick(item)} key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
