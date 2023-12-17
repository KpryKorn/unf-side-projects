import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold mb-8">Users</h1>
      <div className="flex gap-4">
        <div className="flex flex-col items-start gap-2">
          <span className="btn btn-small">Users</span>
          <span className="btn">Users</span>
          <span className="btn btn-large">Users</span>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="btn btn-small">Dashboard</span>
          <span className="btn">Dashboard</span>
          <span className="btn btn-large">Dashboard</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-start gap-2">
          <span className="btn btn-primary btn-small">Users</span>
          <span className="btn btn-primary">Users</span>
          <span className="btn btn-primary btn-large">Users</span>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="btn btn-primary btn-small">Dashboard</span>
          <span className="btn btn-primary">Dashboard</span>
          <span className="btn btn-primary btn-large">Dashboard</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-start gap-2">
          <span className="btn btn-success btn-small">Users</span>
          <span className="btn btn-success">Users</span>
          <span className="btn btn-success btn-large">Users</span>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="btn btn-success btn-small">Dashboard</span>
          <span className="btn btn-success">Dashboard</span>
          <span className="btn btn-success btn-large">Dashboard</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-start gap-2">
          <span className="btn btn-critical btn-small">Users</span>
          <span className="btn btn-critical">Users</span>
          <span className="btn btn-critical btn-large">Users</span>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="btn btn-critical btn-small">Dashboard</span>
          <span className="btn btn-critical">Dashboard</span>
          <span className="btn btn-critical btn-large">Dashboard</span>
        </div>
      </div>
    </div>
  );
}
