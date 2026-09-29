#!/bin/bash

# Student pages
for page in course timetable notes videos fees; do
  mkdir -p src/app/\(dashboard\)/student/$page
  cat << INNER_EOF > src/app/\(dashboard\)/student/$page/page.tsx
export default function Page() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 capitalize">${page}</h1>
      <p className="text-gray-500">This page is currently under construction.</p>
    </div>
  );
}
INNER_EOF
done

# Admin pages
for page in students teachers courses fees analytics attendance announcements settings; do
  mkdir -p src/app/\(dashboard\)/admin/$page
  cat << INNER_EOF > src/app/\(dashboard\)/admin/$page/page.tsx
export default function Page() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 capitalize">${page}</h1>
      <p className="text-gray-500">This page is currently under construction.</p>
    </div>
  );
}
INNER_EOF
done

# Teacher pages
for page in classes students attendance notes videos; do
  mkdir -p src/app/\(dashboard\)/teacher/$page
  cat << INNER_EOF > src/app/\(dashboard\)/teacher/$page/page.tsx
export default function Page() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 capitalize">${page}</h1>
      <p className="text-gray-500">This page is currently under construction.</p>
    </div>
  );
}
INNER_EOF
done

echo "Pages created."
