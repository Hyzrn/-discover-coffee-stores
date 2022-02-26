import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>coffee store {router.query.id}
    <Link href="/">Back to home</Link>
    <Link href="/coffee-store/12345">Back to dynamic</Link>
    </div>
  )
}


export default CoffeeStore; 