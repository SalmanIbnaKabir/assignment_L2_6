export default function Reviews({ review }) {
  return (
    <div className="card shadow-xl border border-indigo-200 p-4">
      <p>User Name: {review.username}</p>
      <p>Rating: {review.rating}</p>
      <p>Comment: {review.comment}</p>
    </div>
  );
}
