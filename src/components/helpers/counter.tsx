import { animate, useInView, useIsomorphicLayoutEffect, type KeyframeOptions } from "framer-motion";
import { useRef } from "react";

interface ICounter {
    from: number;
    to: number;
    animatedOptions?: KeyframeOptions;
    fontSize?: string
}
const Counter = ({ from, to, animatedOptions, fontSize }: ICounter) => {
    const ref = useRef<HTMLSpanElement>(null);
    // Run only when it is in view
    const inView = useInView(ref, { once: true })
    useIsomorphicLayoutEffect(() => {
        const element = ref.current;

        if(!element) return;
        if(!inView) return;

        element.textContent = String(from)
        const controls = animate(from, to, {
            duration: 1.5,
            ease: "easeOut",
            ...animatedOptions,
            onUpdate(value){
                element.textContent = value.toFixed()
            }
        })

        return () => controls.stop()
    }, [ref, from, to, inView])

  return <span ref={ref} className={`text-${fontSize || '[36px]'} font-semibold font-mono`} />
}

export default Counter