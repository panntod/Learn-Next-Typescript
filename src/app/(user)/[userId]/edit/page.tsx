import UpdateForm from "./component/Form";

export default function Page({ params }: { params: { userId: string } }) {
    return <UpdateForm userId={params.userId} />
}
