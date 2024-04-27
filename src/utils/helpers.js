const list = {
    exit: {
        transition: {
            when: "afterChildren",
            staggerDirection: -1,
            type: "spring",
            staggerChildren: 0.15,
            bounce: 0.75,
            stiffness: 1,
        }

    },
    animate: {
        transition: {
            when: "beforeChildren",
            staggerDirection: 1,
            type: "spring",
            staggerChildren: 0.15,
            bounce: 10,
            stiffness: 100,
        }
    },
    initial: {
        opacity: 1
    }
};
const item = {
    exit: {
        opacity: 0,
        y: "10%"
    },
    animate: {
        opacity: 1,
        y: 0
    },
    initial: {
        opacity: 0,
        y: "-10%"
    }
}

export const HELPERS = {item, list};