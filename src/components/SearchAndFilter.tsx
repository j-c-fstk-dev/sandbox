"use client";

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  allTags: string[];
  searchPlaceholder?: string;
  filterLabel?: string;
}

export default function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  selectedTag,
  setSelectedTag,
  allTags,
  searchPlaceholder = "Search...",
  filterLabel = "Filter by:"
}: SearchAndFilterProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-12 animate-slide-up" data-oid="lp5o04n">
      <div className="flex flex-col lg:flex-row gap-4 items-center" data-oid="kz0:4nn">
        {/* Search Input */}
        <div className="flex-1 w-full" data-oid="f7xodx_">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors duration-200" data-oid=":1dy.__" />

        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2 items-center" data-oid="e__wkv2">
          <span className="text-sm font-medium text-neutral-dark-gray whitespace-nowrap" data-oid="s1-.d75">
            {filterLabel}
          </span>
          <button
            onClick={() => setSelectedTag("")}
            className={`tag ${selectedTag === "" ? "tag-active" : "tag-inactive"}`} data-oid="hjqfnvs">

            All
          </button>
          {allTags.map((tag) =>
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
            className={`tag ${selectedTag === tag ? "tag-active" : "tag-inactive"}`} data-oid="wxprxlr">

              {tag}
            </button>
          )}
        </div>

        {/* Clear Filter Button */}
        {selectedTag &&
        <button
          onClick={() => setSelectedTag("")}
          className="text-sm text-primary-green hover:text-primary-green-dark font-medium" data-oid="wxu9q:b">

            Clear Filter
          </button>
        }
      </div>
    </div>);

}