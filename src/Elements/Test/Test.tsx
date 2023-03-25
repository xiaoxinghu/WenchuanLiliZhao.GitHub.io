

import "./Test.css"

interface Props {
  children: any;
}

const Test = ({ children }: Props) => {
  return (
    <h2>
      {children}
    </h2>
  )
}

export default Test
