const ToolsPageLayout = ({ title, subtitle, children }) => (
  <div className="w-full max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-50 mb-2 leading-snug tracking-wider">
      Explore <span className="text-color-4 dark:text-purple-300">{title}</span>
    </h1>
    <p className="text-gray-600 dark:text-gray-100 mb-8 text-center text-lg">
      {subtitle}
    </p>
    {children}
  </div>
);

export default ToolsPageLayout;
