export const cx = (...classNames: (false | null | undefined | string)[]) => {
  return classNames.filter(Boolean).join(' ')
}
