import {
  FileText,
  BookOpen,
  Calculator,
  ArrowUpRight,
  Code2,
} from "lucide-react";

const websitePages = [
  "Home",
  "About Us",
  "Binary MLM Software",
  "Matrix MLM Software",
  "Unilevel MLM Software",
  "Board MLM Software",
  "Contact Us",
  "Pricing",
];

const blogPosts = [
  "How AI is Revolutionizing MLM Software",
  "Complete Guide to Binary MLM Plans",
  "Best MLM Software Features in 2026",
  "Why Direct Selling Companies Need Automation",
  "Choosing the Right Compensation Plan",
];

const resources = [
  "MLM Calculator Tool",
  "XML Sitemap",
  "FAQ Center",
  "Documentation",
];

export default function SitemapPage() {
  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold">
            <Code2 size={16} />
            India MLM Software
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
            Website Sitemap
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Explore all website pages, blog articles, tools, and resources
            designed to help users navigate our platform efficiently.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Website Pages */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

            <div className="flex items-center gap-4 p-7 border-b border-slate-100">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                <FileText className="text-orange-500" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Website Pages
                </h2>

                <p className="text-sm text-slate-500">
                  Core website navigation
                </p>
              </div>
            </div>

            <div className="p-6 space-y-3">
              {websitePages.map((page) => (
                <a
                  key={page}
                  href="#"
                  className="group flex items-center justify-between rounded-2xl px-5 py-4 hover:bg-orange-50 transition"
                >
                  <span className="font-medium text-slate-700 group-hover:text-orange-600">
                    {page}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 group-hover:text-orange-500"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

            <div className="flex items-center gap-4 p-7 border-b border-slate-100">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                <BookOpen className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Blog Articles
                </h2>

                <p className="text-sm text-slate-500">
                  Latest insights & guides
                </p>
              </div>
            </div>

            <div className="p-6 space-y-3">
              {blogPosts.map((post) => (
                <a
                  key={post}
                  href="#"
                  className="group flex items-center justify-between rounded-2xl px-5 py-4 hover:bg-blue-50 transition"
                >
                  <span className="font-medium text-slate-700 group-hover:text-blue-600">
                    {post}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 group-hover:text-blue-500"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

          <div className="flex items-center gap-4 p-7 border-b border-slate-100">
            <div className="h-14 w-14 rounded-2xl bg-purple-50 flex items-center justify-center">
              <Calculator className="text-purple-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Quick Resources
              </h2>

              <p className="text-sm text-slate-500">
                Helpful tools and utilities
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {resources.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  p-6
                  hover:border-orange-300
                  hover:shadow-lg
                  transition-all
                "
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-800 group-hover:text-orange-600">
                    {item}
                  </h3>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 group-hover:text-orange-500"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}