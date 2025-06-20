import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <div>
      <BookOverview createdAt={null} {...sampleBooks[0]} />

      <BookList 
          title="Latest Books"
          books={sampleBooks}
          containerClassName="mt-28"
      />
    </div>
  );
}
