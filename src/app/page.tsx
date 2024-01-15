import ContractForm from "@/components/contract-form"

export default function Home() {
  return (
    <main className="container relative mx-auto">
      <div className="mx-auto lg:w-[800px] py-10 px-10">
        <h1 className="text-2xl font-bold text-cetner pb-10">
          お問い合わせ
        </h1>
        <ContractForm />
      </div>
    </main>
  );
}
