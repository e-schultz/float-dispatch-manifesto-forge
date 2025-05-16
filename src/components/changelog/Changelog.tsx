
import React, { useState, useEffect, useCallback } from "react";
import { CheckIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export interface ChangelogEntry {
  id: string;
  description: string;
  completed: boolean;
  timestamp: string;
}

const Changelog = () => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [newEntryDescription, setNewEntryDescription] = useState("");
  const { toast } = useToast();

  // Load entries from localStorage on component mount
  useEffect(() => {
    const storedEntries = localStorage.getItem("changelogEntries");
    if (storedEntries) {
      try {
        setEntries(JSON.parse(storedEntries));
      } catch (error) {
        console.error("Failed to parse changelog entries:", error);
        toast({
          title: "Error",
          description: "Failed to load changelog entries.",
          variant: "destructive",
        });
      }
    }
  }, [toast]);

  // Save entries to localStorage when they change
  useEffect(() => {
    localStorage.setItem("changelogEntries", JSON.stringify(entries));
  }, [entries]);

  // Memoize functions to prevent unnecessary re-renders
  const generateId = useCallback((): string => {
    return `entry-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }, []);

  const handleAddEntry = useCallback(() => {
    if (!newEntryDescription.trim()) {
      toast({
        description: "Please enter a description for the changelog entry.",
      });
      return;
    }

    const newEntry: ChangelogEntry = {
      id: generateId(),
      description: newEntryDescription.trim(),
      completed: false,
      timestamp: new Date().toISOString(),
    };

    setEntries((prevEntries) => [...prevEntries, newEntry]);
    setNewEntryDescription("");
    
    toast({
      title: "Entry Added",
      description: "New changelog entry has been created.",
    });
  }, [newEntryDescription, generateId, toast]);

  const toggleEntryCompletion = useCallback((id: string) => {
    setEntries((prevEntries) => 
      prevEntries.map(entry => {
        if (entry.id === id) {
          const updated = { ...entry, completed: !entry.completed };
          
          // Show toast when an entry is completed
          if (updated.completed) {
            toast({
              title: "Task Completed",
              description: `"${entry.description}" marked as complete.`,
            });
          }
          
          return updated;
        }
        return entry;
      })
    );
  }, [toast]);

  // Format timestamp for display
  const formatDate = useCallback((timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }, []);

  return (
    <section className="py-12 px-4">
      <Card className="max-w-4xl mx-auto border-gray-800 bg-gray-900/60">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="text-2xl font-bold font-mono">Project Changelog</CardTitle>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="flex gap-3 mb-6">
            <Input
              value={newEntryDescription}
              onChange={(e) => setNewEntryDescription(e.target.value)}
              placeholder="Describe the change..."
              className="bg-gray-800/50 border-gray-700"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddEntry();
              }}
              aria-label="New changelog entry description"
            />
            <Button 
              onClick={handleAddEntry} 
              className="flex items-center gap-2"
              aria-label="Add new changelog entry"
            >
              <PlusIcon className="h-4 w-4" /> Add
            </Button>
          </div>

          <div className="space-y-3">
            {entries.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                No changelog entries yet. Add your first change above.
              </div>
            ) : (
              entries.map((entry) => (
                <div 
                  key={entry.id} 
                  className={`flex items-start gap-3 p-3 rounded-md border ${
                    entry.completed ? "border-gray-700 bg-gray-800/30" : "border-gray-700 bg-gray-800/50"
                  }`}
                >
                  <div className="pt-0.5">
                    <Checkbox
                      checked={entry.completed}
                      onCheckedChange={() => toggleEntryCompletion(entry.id)}
                      className="data-[state=checked]:bg-green-600"
                      aria-label={`Mark "${entry.description}" as ${entry.completed ? "incomplete" : "complete"}`}
                    />
                  </div>
                  <div className="flex-grow">
                    <div className={entry.completed ? "line-through text-gray-400" : ""}>{entry.description}</div>
                    <div className="text-xs text-gray-500 mt-1">{formatDate(entry.timestamp)}</div>
                  </div>
                  {entry.completed && (
                    <div className="text-green-500 flex items-center text-xs mt-1">
                      <CheckIcon className="h-3 w-3 mr-1" /> Completed
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

// Prevent unnecessary re-renders
export default React.memo(Changelog);
