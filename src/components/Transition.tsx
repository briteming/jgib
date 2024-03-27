// reference: https://javascript.plainenglish.io/animating-child-component-on-mount-and-unmount-and-removing-itself-from-dom-after-unmount-65e6bb1cabab
import {
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";

type propsType = {
  from?: { [key: string]: string | number };
  to?: { [key: string]: string | number };
  isShow: boolean;
  options?: { duration: number; fill: "forwards" | "backwards" };
};

export default function Transition({
  children,
  from = { transform: "translateX(100%)" },
  to = { transform: "translateX(0)" },
  isShow,
  options = { duration: 200, fill: "forwards" },
}: PropsWithChildren<propsType>) {
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const [controlIsShow, setControlIsShow] = useState(isShow);

  useEffect(() => {
    const childrenElement = childrenRef.current;
    let animation: Animation | undefined;
    if (isShow) {
      animation = childrenElement?.animate([from, to], options);
      setControlIsShow(true);
    } else if (!isShow) {
      animation = childrenElement?.animate([to, from], options);
      if (animation) {
        animation.onfinish = () => setControlIsShow(false);
      }
    }
    return () => {
      if (animation) {
        animation.cancel();
      }
    };
  }, [isShow, from, to, options]);

  return (
    controlIsShow &&
    cloneElement(children as ReactElement, {
      ref: (ref: HTMLDivElement) => (childrenRef.current = ref),
    })
  );
}
