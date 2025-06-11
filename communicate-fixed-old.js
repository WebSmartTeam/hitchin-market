import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.SUPABASE_URL || 'https://yiffafrjaoztveqgvjlk.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZmZhZnJqYW96dHZlcWd2amxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MDY0MjAsImV4cCI6MjA0ODM4MjQyMH0.CHiRwLnfsJ1hlNLPHHQJzhu0VBwL6YO9KJ7ym2aQaho';

const supabase = createClient(supabaseUrl, supabaseKey);

const FARM_ID = 'HITCHIN-MARKET-001';
const PARENT_FARM = 'ANISH-MASTER-001';

async function sendMessage(type, message) {
  try {
    const { data, error } = await supabase
      .from('mcs_child_updates')
      .insert([
        {
          child_farm_id: FARM_ID,
          parent_farm_id: PARENT_FARM,
          message_type: type,
          message_content: message,
          status: 'sent',
          created_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;
    
    console.log(`✅ Message sent to ${PARENT_FARM} successfully!`);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Error sending message:', error.message);
    return { success: false, error: error.message };
  }
}

async function checkMessages() {
  try {
    const { data, error } = await supabase
      .from('mcs_child_updates')
      .select('*')
      .eq('child_farm_id', FARM_ID)
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;

    console.log('📥 Recent messages:');
    if (data && data.length > 0) {
      data.forEach(msg => {
        console.log(`[${msg.created_at}] ${msg.message_type}: ${msg.message_content}`);
      });
    } else {
      console.log('📭 No messages found');
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('❌ Error checking messages:', error.message);
    return { success: false, error: error.message };
  }
}

// Command line interface
const command = process.argv[2];
const message = process.argv.slice(3).join(' ');

switch (command) {
  case 'send':
    if (!message) {
      console.log('Usage: node communicate-fixed.js send "your message"');
      process.exit(1);
    }
    console.log(`📤 Sending general to ${PARENT_FARM}...`);
    sendMessage('general', message);
    break;
    
  case 'urgent':
    if (!message) {
      console.log('Usage: node communicate-fixed.js urgent "urgent message"');
      process.exit(1);
    }
    console.log(`🚨 Sending urgent to ${PARENT_FARM}...`);
    sendMessage('urgent', message);
    break;
    
  case 'status':
    if (!message) {
      console.log('Usage: node communicate-fixed.js status "status update"');
      process.exit(1);
    }
    console.log(`📊 Sending status to ${PARENT_FARM}...`);
    sendMessage('status', message);
    break;
    
  case 'check':
    checkMessages();
    break;
    
  default:
    console.log('Usage:');
    console.log('  node communicate-fixed.js send "message"');
    console.log('  node communicate-fixed.js urgent "urgent message"');
    console.log('  node communicate-fixed.js status "status update"');
    console.log('  node communicate-fixed.js check');
    break;
}