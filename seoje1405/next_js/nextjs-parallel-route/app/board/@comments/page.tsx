import { wait } from "../../lib/wait";


export default async function CommentsPage() {
    await wait(4000);
    return <div>Comments Page Content</div>;
}
