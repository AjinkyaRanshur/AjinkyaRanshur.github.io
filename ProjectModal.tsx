import { X } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    year: string;
  } | null;
}

/**
 * Mellow Minimalist Academic Design:
 * - Modal with smooth fade-in/fade-out animations
 * - Warm color palette matching the site design
 * - Close button and ESC key support
 * - Backdrop blur for focus
 */

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
        style={{
          animation: isOpen ? "fadeIn 0.3s ease-out" : "fadeOut 0.3s ease-out",
        }}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300"
        onClick={onClose}
        style={{
          animation: isOpen ? "fadeIn 0.3s ease-out" : "fadeOut 0.3s ease-out",
        }}
      >
        <div
          className="bg-card text-card-foreground rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: isOpen
              ? "slideUp 0.3s ease-out"
              : "slideDown 0.3s ease-out",
          }}
        >
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-foreground/60">{project.year}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-secondary rounded transition-colors duration-200 flex-shrink-0"
              aria-label="Close modal"
            >
              <X size={24} className="text-foreground/60 hover:text-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
                Overview
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            {project.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="tag bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Link */}
            {project.link && (
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded transition-all duration-200 hover:opacity-90 hover:shadow-md"
                >
                  View Project →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </>
  );
}
