
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigation } from '@/hooks/useData';

const FloatNavBar = () => {
  const navigation = useNavigation();
  const navItems = navigation.main || [];

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold font-mono hover:text-muted-foreground transition-colors">
            FLOAT.DISPATCH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.text}
                to={item.href}
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-border">
                <SheetHeader>
                  <SheetTitle className="text-left font-mono">FLOAT.DISPATCH</SheetTitle>
                  <SheetDescription className="text-left">
                    Navigate the publishing house
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.text}
                      to={item.href}
                      className="text-lg hover:text-muted-foreground transition-colors"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FloatNavBar;
