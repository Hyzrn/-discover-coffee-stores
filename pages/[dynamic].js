import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Dynamic = () => {

    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.dynamic}</title>
            </Head>
            <h1>Router value {router.query.dynamic}</h1>
            <Link href="/foobar">Page foobar</Link>
        </div>
    )
}

export default Dynamic;