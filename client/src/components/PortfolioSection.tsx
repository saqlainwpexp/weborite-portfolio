import { motion } from "framer-motion";
import { useRef, useState } from "react";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  
  const categories = [
    { id: "all", name: "All Work" },
    { id: "web", name: "Web Design" },
    { id: "seo", name: "SEO" },
    { id: "social", name: "Social Media" },
    { id: "content", name: "Content" }
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "web",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGYxMTBmOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjE4MTY7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZDEpIiAvPgogICAgPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjIiPgogICAgICA8cGF0aCBkPSJNMTAwLDc1IEwyNzUsNzUiIG9wYWNpdHk9IjAuMiIvPgogICAgICA8cGF0aCBkPSJNMTAwLDEwMCBMMzAwLDEwMCIgb3BhY2l0eT0iMC4zIi8+CiAgICAgIDxwYXRoIGQ9Ik0xMDAsMTI1IEwyMjUsMTI1IiBvcGFjaXR5PSIwLjIiLz4KICAgICAgPHBhdGggZD0iTTEwMCwxNTAgTDI3NSwxNTAiIG9wYWNpdHk9IjAuMyIvPgogICAgICA8cGF0aCBkPSJNMTAwLDE3NSBMMTc1LDE3NSIgb3BhY2l0eT0iMC4yIi8+CiAgICAgIDxwYXRoIGQ9Ik0xMDAsMjAwIEwzMDAsMjAwIiBvcGFjaXR5PSIwLjMiLz4KICAgICAgPHBhdGggZD0iTTEwMCwyMjUgTDI1MCwyMjUiIG9wYWNpdHk9IjAuMiIvPgogICAgPC9nPgogICAgPGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iMTUiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMyIvPgogICAgPHJlY3QgeD0iNTAiIHk9IjE1MCIgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiBmaWxsPSIjMDBmZjRjIiBvcGFjaXR5PSIwLjMiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iNzUsMjI1IDUwLDI1MCA3NSwyNTAgMTAwLDIyNSIgZmlsbD0iIzAwZmY0YyIgb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPg==",
      stats: "200% increase in conversions"
    },
    {
      id: 2,
      title: "SEO Campaign",
      category: "seo",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGYxMTBmOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjE4MTY7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZDEpIiAvPgogICAgPGcgZmlsbD0ibm9uZSI+CiAgICAgIDxwYXRoIGQ9Ik01MCwxMDAgTDEwMCwxNzAgTDE1MCwxMzAgTDIwMCwxODAgTDI1MCwxMTAgTDMwMCwxNDAgTDM1MCw4MCIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICAgIDxwYXRoIGQ9Ik01MCwyMDAgTDEwMCwxODAgTDE1MCwxOTAgTDIwMCwxNzAgTDI1MCwxODUgTDMwMCwxNjAgTDM1MCwxOTAiIHN0cm9rZT0iIzAwZmY0YyIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgPC9nPgogICAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTcwIiByPSI2IiBmaWxsPSIjMDBmZjRjIiBvcGFjaXR5PSIwLjUiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjEzMCIgcj0iNiIgZmlsbD0iIzAwZmY0YyIgb3BhY2l0eT0iMC41Ii8+CiAgICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxODAiIHI9IjYiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuNSIvPgogICAgPGNpcmNsZSBjeD0iMjUwIiBjeT0iMTEwIiByPSI2IiBmaWxsPSIjMDBmZjRjIiBvcGFjaXR5PSIwLjUiLz4KICAgIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjE0MCIgcj0iNiIgZmlsbD0iIzAwZmY0YyIgb3BhY2l0eT0iMC41Ii8+CiAgICA8Y2lyY2xlIGN4PSIzNTAiIGN5PSI4MCIgcj0iNiIgZmlsbD0iIzAwZmY0YyIgb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==",
      stats: "89% increase in organic traffic"
    },
    {
      id: 3,
      title: "Social Media Strategy",
      category: "social",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGYxMTBmOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjE4MTY7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZDEpIiAvPgogICAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIvPgogICAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIvPgogICAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iODAiIHI9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmNGMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8Y2lyY2xlIGN4PSIyODAiIGN5PSIyMzAiIHI9IjI1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmNGMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8Y2lyY2xlIGN4PSI3MCIgY3k9IjIwMCIgcj0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmY0YyIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMiLz4KICAgIDxsaW5lIHgxPSIxMDAiIHkxPSIxMDAiIHgyPSIyMDAiIHkyPSIxNTAiIHN0cm9rZT0iIzAwZmY0YyIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjQiLz4KICAgIDxsaW5lIHgxPSIyMDAiIHkxPSIxNTAiIHgyPSIzMDAiIHkyPSI4MCIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNCIvPgogICAgPGxpbmUgeDE9IjIwMCIgeTE9IjE1MCIgeDI9IjI4MCIgeTI9IjIzMCIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNCIvPgogICAgPGxpbmUgeDE9IjIwMCIgeTE9IjE1MCIgeDI9IjcwIiB5Mj0iMjAwIiBzdHJva2U9IiMwMGZmNGMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC40Ii8+Cjwvc3ZnPg==",
      stats: "350% increase in engagement"
    },
    {
      id: 4,
      title: "Content Marketing",
      category: "content",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGYxMTBmOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjE4MTY7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZDEpIiAvPgogICAgPHJlY3QgeD0iNjAiIHk9IjgwIiB3aWR0aD0iMjgwIiBoZWlnaHQ9IjE0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIvPgogICAgPHJlY3QgeD0iODAiIHk9IjEwMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzAwZmY0YyIgb3BhY2l0eT0iMC4zIi8+CiAgICA8cmVjdCB4PSI4MCIgeT0iMTIwIiB3aWR0aD0iODAiIGhlaWdodD0iMTAiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMyIvPgogICAgPHJlY3QgeD0iODAiIHk9IjE0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzAwZmY0YyIgb3BhY2l0eT0iMC4zIi8+CiAgICA8cmVjdCB4PSI4MCIgeT0iMTYwIiB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMyIvPgogICAgPHJlY3QgeD0iODAiIHk9IjE4MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzAwZmY0YyIgb3BhY2l0eT0iMC4zIi8+CiAgICA8Y2lyY2xlIGN4PSIyNTAiIGN5PSIxNDAiIHI9IjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmNGMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8bGluZSB4MT0iMjMwIiB5MT0iMTQwIiB4Mj0iMjcwIiB5Mj0iMTQwIiBzdHJva2U9IiMwMGZmNGMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC40Ii8+CiAgICA8bGluZSB4MT0iMjUwIiB5MT0iMTIwIiB4Mj0iMjUwIiB5Mj0iMTYwIiBzdHJva2U9IiMwMGZmNGMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC40Ii8+Cjwvc3ZnPg==",
      stats: "145% increase in lead generation"
    },
    {
      id: 5,
      title: "Mobile App UI",
      category: "web",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGYxMTBmOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjE4MTY7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZDEpIiAvPgogICAgPHJlY3QgeD0iMTUwIiB5PSI1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMCIgcnk9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmNGMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8cmVjdCB4PSIxNjAiIHk9IjcwIiB3aWR0aD0iODAiIGhlaWdodD0iMTQwIiByeD0iNSIgcnk9IjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmY0YyIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMiLz4KICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjIzNSIgcj0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIvPgogICAgPHJlY3QgeD0iMTcwIiB5PSI4MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMSIvPgogICAgPHJlY3QgeD0iMTcwIiB5PSIxMzAiIHdpZHRoPSIyNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDBmZjRjIiBvcGFjaXR5PSIwLjMiLz4KICAgIDxyZWN0IHg9IjE3MCIgeT0iMTQwIiB3aWR0aD0iNDAiIGhlaWdodD0iNSIgZmlsbD0iIzAwZmY0YyIgb3BhY2l0eT0iMC4zIi8+CiAgICA8cmVjdCB4PSIxNzAiIHk9IjE1MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjUiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMyIvPgogICAgPHJlY3QgeD0iMTcwIiB5PSIxNzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMDBmZjRjIiBvcGFjaXR5PSIwLjIiLz4KPC9zdmc+",
      stats: "User engagement increased by 75%"
    },
    {
      id: 6,
      title: "Local SEO Strategy",
      category: "seo",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGYxMTBmOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjE4MTY7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZDEpIiAvPgogICAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTMwIiByPSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIvPgogICAgPHBvbHlnb24gcG9pbnRzPSIyMDAsODAgMjEwLDEwMCAxOTAsMTAwIiBmaWxsPSIjMDBmZjRjIiBvcGFjaXR5PSIwLjUiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMjUwLDEyMCAyMzAsMTMwIDIzMCwxMTAiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuNSIvPgogICAgPHBvbHlnb24gcG9pbnRzPSIyMDAsMTgwIDE5MCwxNjAgMjEwLDE2MCIgZmlsbD0iIzAwZmY0YyIgb3BhY2l0eT0iMC41Ii8+CiAgICA8cG9seWdvbiBwb2ludHM9IjE1MCwxMjAgMTcwLDExMCAxNzAsMTMwIiBmaWxsPSIjMDBmZjRjIiBvcGFjaXR5PSIwLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMDAsMTkwIEwyMDAsMjUwIiBzdHJva2U9IiMwMGZmNGMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4zIiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4KICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjI1MCIgcj0iMTAiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMyIvPgogICAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTMwIiByPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjRjIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuNCIvPgo8L3N2Zz4=",
      stats: "First page ranking for 25 keywords"
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="portfolio" className="py-24 bg-[#0c0e0c] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-[5%] w-80 h-80 rounded-full bg-gradient-to-r from-[#00ff4c]/3 to-transparent blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.07, 0.12, 0.07],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="text-[#00ff4c] text-sm uppercase tracking-wider font-medium block mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Our Work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Featured <span className="text-[#00ff4c]">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore our portfolio of successful digital transformations across various industries
          </motion.p>
          
          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-[#00ff4c] text-[#0c0e0c]" 
                    : "bg-[#181a18] text-white hover:bg-[#00ff4c]/10 hover:border-[#00ff4c]/30"
                } border ${
                  activeCategory === category.id 
                    ? "border-[#00ff4c]" 
                    : "border-[#2c2e2c]"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group overflow-hidden rounded-lg"
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                layout: { duration: 0.4 }
              }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-[250px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.7 }}
                />
                
                {/* Border Animation */}
                <motion.div 
                  className="absolute inset-0 border-2 border-[#00ff4c]/0 rounded-lg"
                  whileHover={{ borderColor: "rgba(0, 255, 76, 0.5)" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <motion.span 
                    className="uppercase text-[#00ff4c] text-xs tracking-wider mb-2 block font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  >
                    {categories.find(cat => cat.id === project.category)?.name}
                  </motion.span>
                  
                  <motion.h3 
                    className="text-white text-xl font-semibold mb-2 group-hover:text-[#00ff4c] transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 text-sm mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  >
                    {project.stats}
                  </motion.p>
                  
                  <motion.div
                    className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <motion.button 
                      onClick={() => setSelectedProject(project)}
                      className="text-[#00ff4c] text-sm font-medium flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Case Study
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* More Projects Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.button 
            onClick={() => window.location.href = '/portfolio'}
            className="bg-[#181a18] border border-[#2c2e2c] text-white px-8 py-3 rounded-full inline-flex items-center font-medium hover:bg-[#00ff4c]/10 hover:border-[#00ff4c]/30 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 76, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

{selectedProject && (
        <ProjectDialog
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={{
            title: selectedProject.title,
            overview: selectedProject.description || "Digital ID Verification Platform",
            stats: {
              raised: "2M+",
              growth: "72%"
            },
            image: selectedProject.image,
            websiteUrl: selectedProject.url || "#"
          }}
        />
      )}
    </section>
  );
};

export default PortfolioSection;