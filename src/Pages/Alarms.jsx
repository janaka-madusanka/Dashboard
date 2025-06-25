
import NavigationTabs from "@/components/Navtabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const Alarms = () => {
  return (
    <div className="space-y-6">
      <NavigationTabs/>
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-6 w-6 text-red-400" />
        <h1 className="text-3xl font-bold text-white">Alarms</h1>
      </div>
      
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Alarm Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-400">Alarm management functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alarms;
