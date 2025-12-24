import { ReactNode } from "react"
import Link from "next/link"
const BoardLayout = ({ children,
    boardList,
    comments,
    //admin,

 }: {children: ReactNode
    boardList: ReactNode
    comments: ReactNode
    //admin: ReactNode
  }) => {
    //const isAdmin = false;
    
    return (
        <>
        <nav>
            <Link href="/board">Board Home</Link> |
            <Link href="/board/settings">Settings</Link>
        </nav>
        {/* {isAdmin && admin} */}
        {children}
        {boardList}
        {comments}
        
        </>
    )
}

export default BoardLayout;

//설명
 