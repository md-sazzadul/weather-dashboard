import React, { Suspense } from "react";

const AddToFavourite = React.lazy(() => import("./AddToFavourite"));
const WeatherCondition = React.lazy(() => import("./WeatherCondition"));
const WeatherHeadline = React.lazy(() => import("./WeatherHeadline"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          Something went wrong. Please refresh the page or try again later.
        </div>
      );
    }
    return this.props.children;
  }
}

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full">
    <div className="loader" />
    <span className="ml-2 text-gray-700">Loading...</span>
  </div>
);

const WeatherBoard = () => {
  return (
    <div className="weather-board bg-gray-100 p-6 rounded-lg shadow-lg">
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <WeatherHeadline />
          <WeatherCondition />
          <AddToFavourite />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default React.memo(WeatherBoard);
