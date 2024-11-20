import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { LinkedinIcon, CopyIcon, Share2Icon, X } from "lucide-react";
import { categories, postStyles } from "../assets/content"; // Import static content

// Helper function to get random element from an array
const getRandomElement = (array: string[]) =>
  array[Math.floor(Math.random() * array.length)];

// Modal Component for Web-based Share
const ShareModal: React.FC<{
  post: string;
  onClose: () => void;
}> = ({ post, onClose }) => {
  const encodedPost = encodeURIComponent(post);

  const shareToWeb = (platform: string) => {
    const urlMap: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedPost}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedPost}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedPost}`,
      whatsapp: `https://wa.me/?text=${encodedPost}`,
      email: `mailto:?subject=LinkedIn Inspiration Post&body=${encodedPost}`,
    };

    const url = urlMap[platform];
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("Invalid platform selected!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Share Your Post</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Share this post via your favorite platform:
        </p>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => shareToWeb("linkedin")}
            className="bg-blue-600 text-white w-full py-2 rounded-md"
          >
            Share to LinkedIn
          </Button>
          <Button
            onClick={() => shareToWeb("twitter")}
            className="bg-blue-400 text-white w-full py-2 rounded-md"
          >
            Share to Twitter
          </Button>
          <Button
            onClick={() => shareToWeb("facebook")}
            className="bg-blue-700 text-white w-full py-2 rounded-md"
          >
            Share to Facebook
          </Button>
          <Button
            onClick={() => shareToWeb("whatsapp")}
            className="bg-green-500 text-white w-full py-2 rounded-md"
          >
            Share to WhatsApp
          </Button>
          <Button
            onClick={() => shareToWeb("email")}
            className="bg-gray-600 text-white w-full py-2 rounded-md"
          >
            Share via Email
          </Button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const LinkedInGenerator: React.FC = () => {
  const [selectedStyle, setSelectedStyle] =
    useState<keyof typeof postStyles>("inspirational");
  const [post, setPost] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  const generatePost = () => {
    const data = {
      scenario: getRandomElement(categories.scenario),
      mindset: getRandomElement(categories.mindset),
      character: getRandomElement(categories.character),
      lesson: getRandomElement(categories.lesson),
      closing: getRandomElement(categories.closing),
      hashtags: getRandomElement(categories.hashtags),
    };

    const generatedPost = postStyles[selectedStyle].template(data);
    setPost(generatedPost);
    setIsGenerated(true);
    setCopied(false);
    setCharCount(generatedPost.length);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(post);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sharePost = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "LinkedIn Inspiration Post",
          text: post,
        });
      } catch (error) {
        console.error("Error sharing the post:", error);
        alert("Native sharing failed. Please use web sharing!");
      }
    } else {
      alert("Native sharing is not supported in your browser.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-3xl bg-white shadow-lg rounded-lg">
        <CardHeader className="bg-primary text-white p-6 rounded-t-lg">
          <CardTitle className="flex items-center gap-3 text-xl font-bold">
            <LinkedinIcon className="w-6 h-6" />
            LinkedIn Inspiration Generator
          </CardTitle>
          <CardDescription className="text-base text-gray-200">
            Generate viral-worthy LinkedIn posts in seconds!
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 space-y-8">
          <Tabs
            defaultValue="inspirational"
            value={selectedStyle}
            onValueChange={(value) =>
              setSelectedStyle(value as keyof typeof postStyles)
            }
          >
            <TabsList className="grid grid-cols-4 gap-4">
              {Object.entries(postStyles).map(([key, style]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 ${
                    selectedStyle === key
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {style.icon} {style.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Button
            onClick={generatePost}
            className="w-full bg-primary hover:bg-primaryDark text-white py-3 rounded-lg font-semibold text-lg"
          >
            Generate LinkedIn Wisdom
          </Button>

          {isGenerated && (
            <div className="space-y-4">
              <div className="relative p-4 bg-gray-50 rounded-lg whitespace-pre-wrap border border-gray-200">
                {post}
                <Badge
                  className={`absolute top-2 right-2 ${
                    charCount > 3000
                      ? "bg-red-100 text-red-600"
                      : "bg-secondary text-primary"
                  }`}
                >
                  {charCount} / 3000
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="flex items-center gap-2 border-primary text-primary px-4 py-2 rounded-md"
                >
                  <CopyIcon className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy"}
                </Button>
                <Button
                  onClick={sharePost}
                  variant="outline"
                  className="flex items-center gap-2 border-primary text-primary px-4 py-2 rounded-md"
                >
                  <Share2Icon className="w-4 h-4" />
                  Native Share
                </Button>
                <Button
                  onClick={() => setShareModalOpen(true)}
                  variant="outline"
                  className="flex items-center gap-2 border-primary text-primary px-4 py-2 rounded-md"
                >
                  <Share2Icon className="w-4 h-4" />
                  Web Share
                </Button>
              </div>
            </div>
          )}

          {copied && (
            <div className="mt-4 p-4 bg-green-50 text-green-800 border border-green-300 rounded-md">
              <div className="font-semibold">Success!</div>
              <div className="text-sm">
                Post copied to clipboard! Ready to inspire your network! 🚀
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {isShareModalOpen && (
        <ShareModal post={post} onClose={() => setShareModalOpen(false)} />
      )}
    </div>
  );
};

export default LinkedInGenerator;
