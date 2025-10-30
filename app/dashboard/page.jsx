"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  PlusCircle,
  Eye,
  Heart,
  MessageCircle,
  Users,
  TrendingUp,
  Calendar,
  BarChart3,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { formatDistanceToNow } from "date-fns";
import DailyViewsChart from "@/components/daily-views-chart";

export default function DashboardPage() {
  // Fetch real data
  const { data: analytics, isLoading: analyticsLoading } = useConvexQuery(
    api.dashboard.getAnalytics
  );
  const { data: recentPosts, isLoading: postsLoading } = useConvexQuery(
    api.dashboard.getPostsWithAnalytics,
    { limit: 5 }
  );
  const { data: recentActivity, isLoading: activityLoading } = useConvexQuery(
    api.dashboard.getRecentActivity,
    { limit: 8 }
  );
  const { data: dailyViewsData, isLoading: chartLoading } = useConvexQuery(
    api.dashboard.getDailyViews
  );

  // Format time relative to now
  const formatTime = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };

  // Loading states
  if (analyticsLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-purple-400 mx-auto" />
          <p className="text-slate-400 mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Default values if no data
  const stats = analytics || {
    totalViews: 0,
    totalLikes: 0,
    totalComments: 0,
    totalFollowers: 0,
    viewsGrowth: 0,
    likesGrowth: 0,
    commentsGrowth: 0,
    followersGrowth: 0,
  };

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-1">
              Dashboard
            </h1>
            <p className="text-base text-muted-foreground">
              Welcome back! Here's your content overview.
            </p>
          </div>

          <Link href="/dashboard/create">
            <Button className="px-4 py-2">
              <PlusCircle className="h-4 w-4 mr-2" />
              Create New Post
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Views
              </CardTitle>
              <div className="p-1.5 bg-muted rounded-md">
                <Eye className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">
                {stats.totalViews.toLocaleString()}
              </div>
              {stats.viewsGrowth > 0 && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+{stats.viewsGrowth}% from last month</span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Likes
              </CardTitle>
              <div className="p-1.5 bg-muted rounded-md">
                <Heart className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">
                {stats.totalLikes.toLocaleString()}
              </div>
              {stats.likesGrowth > 0 && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+{stats.likesGrowth}% from last month</span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Comments
              </CardTitle>
              <div className="p-1.5 bg-muted rounded-md">
                <MessageCircle className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">
                {stats.totalComments.toLocaleString()}
              </div>
              {stats.commentsGrowth > 0 && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+{stats.commentsGrowth}% from last month</span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Followers
              </CardTitle>
              <div className="p-1.5 bg-muted rounded-md">
                <Users className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">
                {stats.totalFollowers.toLocaleString()}
              </div>
              {stats.followersGrowth > 0 && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+{stats.followersGrowth}% from last month</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Posts */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Posts</CardTitle>
                <Link href="/dashboard/posts">
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              {postsLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              ) : !recentPosts || recentPosts.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-sm mb-4">No posts yet</p>
                  <Link href="/dashboard/create">
                    <Button size="sm">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Create Your First Post
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentPosts.map((post) => (
                    <div
                      key={post._id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() =>
                        window.open(
                          `/dashboard/posts/edit/${post._id}`,
                          "_self"
                        )
                      }
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-sm truncate">
                          {post.title || "Untitled Post"}
                        </h3>
                        <div className="flex items-center gap-3 mt-1.5">
                          <Badge variant={post.status === "published" ? "default" : "secondary"} className="text-xs">
                            {post.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {post.status === "published" && post.publishedAt
                              ? `Published ${formatTime(post.publishedAt)}`
                              : post.status === "draft"
                                ? `Updated ${formatTime(post.updatedAt)}`
                                : post.scheduledFor
                                  ? `Scheduled for ${new Date(post.scheduledFor).toLocaleDateString()}`
                                  : `Updated ${formatTime(post.updatedAt)}`}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.viewCount || 0}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {post.likeCount || 0}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {post.commentCount || 0}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Analytics Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-base">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics Overview
              </CardTitle>
              <CardDescription>Views over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <DailyViewsChart data={dailyViewsData} isLoading={chartLoading} />
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest interactions with your content
              </CardDescription>
            </CardHeader>
            <CardContent>
              {activityLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              ) : !recentActivity || recentActivity.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-sm">No recent activity</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs bg-muted">
                        {activity.type === "like" && (
                          <Heart className="h-3 w-3" />
                        )}
                        {activity.type === "comment" && (
                          <MessageCircle className="h-3 w-3" />
                        )}
                        {activity.type === "follow" && (
                          <Users className="h-3 w-3" />
                        )}
                      </div>

                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span>
                          {activity.type === "like" &&
                            ` liked your post "${activity.post}"`}
                          {activity.type === "comment" &&
                            ` commented on "${activity.post}"`}
                          {activity.type === "follow" &&
                            " started following you"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {formatTime(activity.time)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/dashboard/create">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create New Post
                </Button>
              </Link>

              <Link href="/dashboard/posts">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Manage Posts
                </Button>
              </Link>

              <Link href="/dashboard/followers">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  View Followers
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}
