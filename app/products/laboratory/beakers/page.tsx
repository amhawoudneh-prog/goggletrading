import Image from "next/image"

const LaboratoryBeakersPage = () => {
  const productImages = ["/images/beakers-new.jpeg"]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Laboratory Beakers</h1>
      <div className="flex justify-center">
        <Image
          src="/images/beakers-new.jpeg"
          alt="Laboratory Beakers"
          width={400}
          height={400}
          className="w-full h-96 object-contain rounded-lg"
        />
      </div>
      {/* rest of code here */}
    </div>
  )
}

export default LaboratoryBeakersPage
