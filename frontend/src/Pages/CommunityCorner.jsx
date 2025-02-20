import React, { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

// Reusable Components
function Button({ children, onClick, className }) {
  return (
    <button 
      onClick={onClick || (() => {})} 
      className={`px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </button>
  );
}

function Input({ className, ...props }) {
  return (
    <input 
      className={`border border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 ${className}`} 
      {...props} 
    />
  );
}

function Textarea({ className, ...props }) {
  return (
    <textarea 
      className={`border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none ${className}`} 
      {...props} 
    />
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`p-6 shadow-sm border border-gray-100 rounded-xl bg-white transition-all duration-200 hover:shadow-md ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return <div className="space-y-4">{children}</div>;
}

// Reply Section Component
function ReplySection({ post, addReply }) {
  const [replyText, setReplyText] = useState("");

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center gap-2">
        <Input
          className="flex-1"
          placeholder="Write a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <Button 
          className="bg-[#DAE952] text-black p-2 rounded-full hover:opacity-90 aspect-square"
          onClick={() => { 
            addReply(post.id, replyText); 
            setReplyText(""); 
          }}
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
}

// Community Component
function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      text: "Hi guys, would love to share a delicious dish I made!",
      author: "Jonathan",
      time: "Just Now",
      image: "https://i.pinimg.com/736x/31/bd/88/31bd88cc2c87124bc29a9009609be881.jpg",
      replies: [],
    },
  ]);
  const [newPost, setNewPost] = useState("");
  
  const addPost = () => {
    if (!newPost.trim()) return;
    setPosts([
      { 
        id: Date.now(), 
        text: newPost, 
        author: "Anonymous", 
        time: "Just Now", 
        image: "",
        replies: [] 
      }, 
      ...posts
    ]);
    setNewPost("");
  };

  const addReply = (postId, replyText) => {
    if (!replyText.trim()) return;
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, replies: [...post.replies, { id: Date.now(), text: replyText }] }
          : post
      )
    );
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <img
            src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 space-y-4">
            <Textarea
              className="w-full h-16"
              placeholder="Share or ask something to everyone!"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <div className="flex justify-end">
              <Button onClick={addPost} className="bg-[#DAE952] text-black hover:opacity-90">
                Post
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="w-full">
            <CardContent>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              <p className="text-gray-700 mt-5">{post.text}</p>
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.text} 
                  className="w-full h-73 object-cover rounded-lg mt-3" 
                />
              )}
              <ReplySection post={post} addReply={addReply} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Main CommunityCorner Component that includes both Community and Events
function CommunityCorner() {
  const [events, setEvents] = useState([
    { id: 1, name: "Aahar: International Food and Hospitality Fair 2025", date: "15 March 2025", attendees: 215, image: "https://indiatradefair.com/aahardelhi/images/Circle%20AAHAR%2025.jpg", editing: false, page: "https://indiatradefair.com/aahardelhi/" },
    { id: 2, name: "Farm to Fork Expo", date: "15 March 2025", attendees: 122, image: "https://cdn2.allevents.in/thumbs/thumb662a19a1cdfa6.jpg", editing: false, page: "https://www.expoworld.in/" },
    { id: 3, name: "Sushi Masterclass @MalCha", date: "15 March 2025", attendees: 419, image: "https://cdn2.allevents.in/thumbs/thumb66bee36b056d4.jpg", editing: false, page: "https://allevents.in/new%20delhi/sushi-masterclass-malcha/80003606807218?slot=2025-02-16" },
  ]);

  const handleEditClick = (id) => {
    setEvents(events.map(event => event.id === id ? { ...event, editing: !event.editing } : event));
  };

  const handleNameChange = (id, newName) => {
    setEvents(events.map(event => event.id === id ? { ...event, name: newName } : event));
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-yellow-50 to-lime-100">
      <div className="relative z-10 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <div className="w-3/5">
            <Community />
          </div>
          <div className="w-2/5 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              {events.map(event => (
                <Card key={event.id} className="w-full">
                  <CardContent>
                    <div className="flex gap-4">
                      <img 
                        src={event.image} 
                        alt={event.name} 
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#57D2B1]">{event.date}</p>
                        {event.editing ? (
                          <input
                            type="text"
                            value={event.name}
                            onChange={(e) => handleNameChange(event.id, e.target.value)}
                            className="border p-2 rounded-lg w-full mt-1 focus:ring-2 focus:ring-[#57D2B1] focus:border-transparent outline-none"
                          />
                        ) : (
                          <h3 className="font-semibold text-gray-900 mt-1 truncate">{event.name}</h3>
                        )}
                        <p className="text-sm text-gray-500 mt-1">
                          {event.attendees} People have joined this event
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button
                        className="bg-[#DAE952] text-black hover:opacity-90"
                        onClick={() => window.open(event.page, "_blank")}
                      >
                        Explore
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button 
              className="bg-[#DAE952] text-black w-full hover:opacity-90"
              onClick={() => {}}
            >
              See All Events
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg 
          className="w-full h-auto" 
          viewBox="0 0 1440 150" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" 
            fill="#D9F99D" 
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default CommunityCorner;