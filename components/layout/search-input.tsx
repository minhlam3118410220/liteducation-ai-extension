"use client"

import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Suggestion {
  label: string;
  value: string;
}

interface SimpleSearchInputProps {
  suggestions: Suggestion[];
  onSearch: (searchTerm: string) => void;
}

export default function FilterSearchInput ({
  suggestions = [],
  onSearch
} : SimpleSearchInputProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue) {
      const filtered = suggestions.filter(item =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
    }
  }, [inputValue, suggestions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionSelect = (value: string) => {
    setInputValue(value);
    setIsOpen(false);
    onSearch(value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
    setIsOpen(false);
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Input
            type="text"
            placeholder="Tìm kiếm..."
            value={inputValue}
            onChange={handleInputChange}
            className="flex-grow"
          />
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandEmpty>Không tìm thấy gợi ý.</CommandEmpty>
            <CommandGroup>
              {filteredSuggestions.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={() => handleSuggestionSelect(item.value)}
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <Button type="button" onClick={handleSearch}>
        <Search className="h-4 w-4 mr-2" />
        Tìm kiếm
      </Button>
    </div>
  );
};