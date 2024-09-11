import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <h2>Zaid Ahmad</h2>
            <Link href={"https://github.com/zaid-ahmad/cprg306-assignments"}>
                Link to GitHub repository
            </Link>
        </div>
    );
}
